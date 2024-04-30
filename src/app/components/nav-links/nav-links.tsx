'use client';

import Link from 'next/link';
import styles from './nav-links.module.css';

export function NavLinks() {
  return (
    <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/chart">Chart</Link>
    </div>
  );
}
