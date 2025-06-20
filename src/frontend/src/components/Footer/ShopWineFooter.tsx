import styles from "./ShopWineFooter.module.scss";

export const ShopWineFooter = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div>© 2025 Vino Selecto. All rights reserved.</div>
        <div>Application version: 1.0.</div>
      </div>
      <div>
        Integrations (Google Drive, Figma, Behance) — as a quick reminder.
      </div>
      <div>Support email: support@refix.com</div>
    </footer>
  );
};
