function useToggleMenu(menuObj) {
  const toggleMenu = (menu) => () =>
    Object.entries(menuObj).forEach(([name, setState]) =>
      menu === name ? setState((prev) => !prev) : setState(false),
    );

  return toggleMenu;
}

export default useToggleMenu;
