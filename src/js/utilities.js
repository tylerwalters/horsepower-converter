export default (() => {
  const formatNumber = (num) => {
    if (num > 1) {
      return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num;
    }
  };

  return {
    formatNumber: formatNumber
  }
})();