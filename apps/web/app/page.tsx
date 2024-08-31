import styles from "./page.module.css";

import { privateSearchService } from "@repo/integrations/src/private/search/service";

export default async function HomePage() {
  const products = await privateSearchService.getAllProducts();

  return (
    <div className={styles.page}>
      {products.map((product) => (
        <h2 key={product.title}>{product.title}</h2>
      ))}
    </div>
  );
}
