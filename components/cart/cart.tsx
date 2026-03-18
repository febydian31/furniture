"use client";
import { useState } from "react";
import CartItem from "./cartItem";
import CartSummary from "./cartSumarry";

const initialCart = [
{
id: 1,
nama: "Kursi Kayu Minimalis",
ukuran: "45 x 45 cm",
harga: 350000,
qty: 1,
gambar:"https://images.unsplash.com/photo-1598300053653-1e3b6d2bcb59?w=400&q=80",
},
{
id: 2,
nama: "Meja Tamu Modern",
ukuran: "100 x 60 cm",
harga: 950000,
qty: 1,
gambar:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&q=80",
},
{
id: 3,
nama: "Lemari Pakaian 2 Pintu",
ukuran: "180 x 80 cm",
harga: 1800000,
qty: 1,
gambar:"https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=400&q=80",
},
];

export default function Cart() {

const [cart, setCart] = useState(initialCart);

const tambah = (id:number)=>{
setCart(cart.map(i=>i.id===id ? {...i, qty:i.qty+1}:i))
}

const kurang = (id:number)=>{
setCart(cart.map(i=>i.id===id && i.qty>1 ? {...i, qty:i.qty-1}:i))
}

const hapus = (id:number)=>{
setCart(cart.filter(i=>i.id!==id))
}

const subtotal = cart.reduce((acc,item)=>acc + item.harga * item.qty,0)

const formatRupiah=(angka:number)=>{
return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(angka)
}

return (

<section className="max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-10">

<h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
Keranjang Belanja
</h1>

{/* Jika keranjang kosong */}
{cart.length === 0 ? (

<div className="flex flex-col items-center justify-center py-20 text-center">

<p className="text-lg text-gray-500">
Anda belum memilih property
</p>

<button
onClick={()=>window.location.href="/katalog"}
className="mt-6 px-6 py-2 border rounded-lg hover:bg-gray-100"
>
Lihat Produk
</button>

</div>

) : (

<div className="grid lg:grid-cols-3 gap-6">

{/* Cart Item */}
<div className="lg:col-span-2 space-y-4">

{cart.map(item=>(
<CartItem
key={item.id}
item={item}
tambah={tambah}
kurang={kurang}
hapus={hapus}
formatRupiah={formatRupiah}
/>
))}

</div>

{/* Cart Summary */}
<CartSummary
totalProduk={cart.length}
subtotal={subtotal}
formatRupiah={formatRupiah}
/>

</div>

)}

</section>

)
}