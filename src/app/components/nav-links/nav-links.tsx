'use client';

import Link from 'next/link';
import styles from './nav-links.module.css';

export function NavLinks() {
  return (
    <div className={styles.links}>
      <Link href="/products">Products</Link>
      <Link href="/more">More</Link>
    </div>
  );
}
