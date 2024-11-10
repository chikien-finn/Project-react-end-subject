import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

const products = [
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
    { id: 1, name: "Điện thoại", category: "Electronics", image: "anh1_11zon.png"},
    { id: 2, name: "Điện thoại", category: "Electronics", image: "anh2_11zon.png"},
    { id: 3, name: "Điện thoại", category: "Electronics", image: "anh3_11zon.png"},
    { id: 4, name: "Laptop", category: "Gaming", image: "anh4_11zon.png"},
    { id: 5, name: "Laptop", category: "Gaming", image: "anh5_11zon.png"},
    { id: 6, name: "Laptop", category: "Gaming", image: "anh6_11zon.png"},
]

export default function Home() {
    const [search, setSearch] = useState("")
    const [category, SetCategory] = useState("All");
    const filterProducts = products.filter(
        (product) => 
            (category === "All" || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase())
    )
    const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='button-main'>
            <button className='but-login' onClick={() => navigate('/login')}>đăng nhập</button>
            <button className='but-register' onClick={() => navigate('/dangky')}>đăng Ký</button>
        </div>
        <div className='seperator' />
        <h1>Home</h1>
        <div className='search-filter-container'>
            <input className='search'
                type='text'
                placeholder='search products you want!'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            <select value={category} onChange={(e) => SetCategory(e.target.value)}>
                <option value={'All'}>tất cả sản phẩm</option>
                <option value={'Electronics'}>điện tử</option>
                <option value={'Gaming'}>người nghiện</option>
            </select>
        </div>
        

        <div className='products'>
            {filterProducts.map((product) => (
                <div className='product-card' key={product.id}>
                    <img src={`/${product.image}`} alt = {product.name} />
                    <h2>{product.name}</h2>
                    <p>category: {product.category}</p>
                    <Link to = {`/product/${product.id}`}>xem chi tiết</Link>
                </div>
            ))}
        </div>
    </div>
  )
}
