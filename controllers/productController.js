import Product from "../models/Product.js";

// Get All Products
export const getProducts = async (req, res, next) => {
    //res.render("category/getCategories", {
      //title: "CategoryList",
    //});

    const products = await Product.find();
    console.log(products);

    // res.status(200).json({ categories });
    res.status(200).render('product/getProducts', {
        title: "ProductList",
        products: products,
    });
}

export const postProduct = async (req, res, next) => {
    // Send categoryName to request body
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;
    const productCategory = req.body.productCategory
            
    // create new category with mongoose
    const product = await Product.create({productName, productPrice, productDescription, productCategory});
            
    console.log(product)
            
    // res.status(201).redirect("/categories")
    res.status(201).json({ product });
                
    res.render("product/postProduct", {
    title: "CreateProduct",
    });
}