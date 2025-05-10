'use client';
import styles from "./page.module.scss";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Button from "../_components/button/Button";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


const products = [
    {
      id: 1,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/AgFiTote.png",
      category: "tote"
    },
    {
      id: 2,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieOnMoonTote.jpg",
      category: "tote"
    },
    {
      id: 3,
      name: "Jackie Tote Bag (2nd Edition; Spring Quarter 2024)",
      cost: "$16.00",
      image: "/TestImages/JackieTote.png",
      category: "tote"
    },
    {
      id: 4,
      name: "Colonizer Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie1.jpg",
      category: "sticker"
      },
      {
      id: 5,
      name: "Coquette Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/Jackie2.jpg",
      category: "sticker"
      },
      {
      id: 6, 
      name: "Boba Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieBoba.png",
      category: "sticker"
      },
      {
      id: 7, 
      name: "Eepy Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/EepyJackie.jpg",
      category: "sticker"
      },
      {
      id: 8, 
      name: "Santa Jackie Sticker",
      cost: "$16.00",
      image: "/TestImages/SantaJackie.jpg",
      category: "sticker"
      },
      {
      id: 9, 
      name: "Jackie Maud'dib Sticker",
      cost: "$16.00",
      image: "/TestImages/JackieMaud'dib.jpg",
      category: "sticker"
      },
  ];

export default function Storelisting() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

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
    <main>
      <section className={styles.top}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Merch Store</h1>

          <div className={styles.buttons}>
              
            <Button onClick={() => handleCategoryChange("all")} color={(selectedCategory === "all")? "gradient" : "light"} width={100}>
              All
            </Button>
            <Button onClick={() => handleCategoryChange("tote")} color={(selectedCategory === "tote")? "gradient" : "light"} width={200}>
              Tote Bags
            </Button>
            <Button onClick={() => handleCategoryChange("sticker")} color={(selectedCategory === "sticker")? "gradient" : "light"} width={200}>
              Stickers
            </Button>
          </div>
        </div>

      </section>

      <section className={styles.listbox}>
        {currentProducts.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className={styles.product}>
          <Image
            className={styles.container}
            src={product.image}
            alt={product.name}
            width={424}
            height={424}
          />

          <div className={styles.productdetail}>
            <p className={styles.productname}>{product.name}</p>
            <p className={styles.cost}>{product.cost}</p>
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
  
