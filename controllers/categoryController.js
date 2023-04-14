import Category from "../models/Category.js";

// Get All Categories
export const getCategories = async (req, res, next) => {
    //res.render("category/getCategories", {
      //title: "CategoryList",
    //});

    const categories = await Category.find();
    console.log(categories);

    // res.status(200).json({ categories });
    res.status(200).render('category/getCategories', {
        title: "CategoryList",
        categories: categories,
    });
  };

export const postCategory = async (req, res, next) => {
    // Send categoryName to request body
    const categoryName = req.body.categoryName;

    // create new category with mongoose
    const category = await Category.create({categoryName});

    console.log(category)

    // res.status(201).redirect("/categories")
    res.status(201).json({ category });
    
    res.render("category/postCategory", {
      title: "CreateCategory",
    });
   
};
  