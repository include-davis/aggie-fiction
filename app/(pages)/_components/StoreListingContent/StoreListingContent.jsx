/* eslint-disable react/prop-types */
"use client";
import styles from "./StoreListingContent.module.scss"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Button from "@/app/(pages)/_components/Button/Button";
import { useRouter } from 'next/navigation';

export function StoreListingContent({ products }) {
    const [storeProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const initialCategory = 'All';
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = storeProducts.filter(
        (product) => selectedCategory === "All" || product.categories.includes(selectedCategory)
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const categories = [
        "All",
        ...Array.from(
            new Set(
                products
                .flatMap(product => product.categories?.split(','))
                .map(category => category?.trim())
                .filter(Boolean)
            )
        )
    ];

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        router.push(`/store?category=${category}`);
    };

    const router = useRouter();

    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    return (
        <main className={styles.main}>
            <section className={styles.top}>
            <div className={styles.headerRow}>
                <h1 className={styles.title}>Merch Store</h1>

                <div className={styles.buttons}>
                {categories.map((category) => (
                    <Button key={category} extraStyles={category === "All" ? styles.buttonsize1 : styles.buttonsize2} onClick={() => handleCategoryChange(category)} color={(selectedCategory === category)? "gradient" : "light"} >
                        {category}
                    </Button>
                ))}
                
                
                </div>
            </div>

            </section>

            <section className={styles.listbox}>
            {currentProducts.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id} className={styles.product}>
                    <Image
                        className={styles.container}
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        width={424}
                        height={424}
                    />

                    <div className={styles.productdetail}>
                    <p className={styles.productname}>{product.name}</p>
                    <p className={styles.cost}>{product.price}</p>
                    </div>
                </Link>
            ))}
            </section>

            {totalPages > 1 && (
            <section className={styles.bottom}>
                <div className={styles.pagination}>
                <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>&lt;&lt;</button>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
                
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={currentPage === i + 1 ? styles.activePage : ''}
                    >
                    {i + 1}
                    </button>
                ))}

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
                <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>&gt;&gt;</button>
                </div>
            </section>
            )}
        </main>
    );
}
  
