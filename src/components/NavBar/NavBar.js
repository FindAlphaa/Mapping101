import styles from "./NavBar.module.css";

function NavBar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarChild} />
			<div className={styles.logo2}>Mapping 101</div>
			<div className={styles.buttons1}>
				<div className={styles.signUpWrapper}>
					<div className={styles.signUp}>Home</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
