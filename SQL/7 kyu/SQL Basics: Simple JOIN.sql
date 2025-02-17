SELECT 
    products.*, 
    companies.name AS company_name
FROM 
    products
JOIN 
    companies ON products.company_id = companies.id;
