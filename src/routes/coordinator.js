export const goToHomePage = (navigate) => {
  navigate("/");
}
export const goToProdutosPage = (navigate) => {
  navigate(`/produtos`);
}

export const goToSobrePage = (navigate) => {
  navigate("/sobre");
}


export const goBack = (navigate) => {
  navigate(-1)
}