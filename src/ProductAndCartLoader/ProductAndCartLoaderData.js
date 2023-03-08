import { getStoredCard } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    const productsData = await fetch("products.json");
    const product = await productsData.json();

    const savedCart = getStoredCard();
    const initialValue = [];
    for (const id in savedCart) {
        const addedProduct = product.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialValue.push(addedProduct);
        }
    }

    return { product, initialValue };
}