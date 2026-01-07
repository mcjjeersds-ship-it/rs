import { useEffect } from 'react';

const Antrian = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-[#1d4d85] mb-8">Antrian</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-70 text-lg">
            Halaman informasi antrian rumah sakit. Di sini Anda dapat melihat status antrian, 
            nomor antrian Anda, dan estimasi waktu tunggu.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#1d4d85] mb-4">Cara Mengakses Antrian</h2>
            <ul className="list-disc pl-6 text-gray-70 space-y-2">
              <li>Daftar melalui layanan pendaftaran atau aplikasi mobile</li>
              <li>Dapatkan nomor antrian Anda</li>
              <li>Lihat estimasi waktu tunggu di layar informasi</li>
              <li>Panggilan nomor antrian akan ditampilkan di layar dan pengumuman suara</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antrian;