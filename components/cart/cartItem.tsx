"use client";
import Image from "next/image";

interface CartItemProps {
  item: {
    id: number;
    nama: string;
    ukuran: string;
    harga: number;
    qty: number;
    gambar: string;
  };
  tambah: (id: number) => void;
  kurang: (id: number) => void;
  hapus: (id: number) => void;
  formatRupiah: (angka: number) => string;
}

export default function CartItem({
  item,
  tambah,
  kurang,
  hapus,
  formatRupiah,
}: CartItemProps) {
  return (
    <div className="border rounded-lg p-4 bg-white">

      <div className="flex gap-4">

        {/* Gambar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
          <Image
            src={item.gambar}
            alt={item.nama}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Info Produk */}
        <div className="flex-1 flex flex-col justify-between">

          <div>
            <p className="font-semibold text-gray-800">
              {item.nama}
            </p>

            <p className="text-sm text-gray-500">
              {item.ukuran}
            </p>
          </div>

          {/* Harga mobile */}
          <p className="text-sm text-gray-600 mt-1 sm:hidden">
            {formatRupiah(item.harga)}
          </p>

          {/* Qty + Total */}
          <div className="flex items-center justify-between mt-3">

            {/* Qty */}
            <div className="flex items-center border rounded-md overflow-hidden">

              <button
                onClick={() => kurang(item.id)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                -
              </button>

              <span className="px-3 text-sm">
                {item.qty}
              </span>

              <button
                onClick={() => tambah(item.id)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>

            </div>

            {/* Total */}
            <p className="font-semibold text-gray-800">
              {formatRupiah(item.harga * item.qty)}
            </p>

          </div>

        </div>

        {/* Harga Desktop */}
        <div className="hidden sm:flex flex-col justify-between items-end">

          <button
            onClick={() => hapus(item.id)}
            className="text-gray-400 hover:text-red-500"
          >
            ✕
          </button>

          <p className="text-sm text-gray-600">
            {formatRupiah(item.harga)}
          </p>

        </div>

      </div>
    </div>
  );
}