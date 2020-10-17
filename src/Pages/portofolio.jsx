import React from 'react';

const Portofolio = () => {
  const experiences = [
    {
      nama: 'Organisasi',
      kegiatan: 'Menjadi koordinator Divisi Humas Karang Taruna RW 16',
    },
    {
      nama: 'Organisasi',
      kegiatan:
        'Mengikuti kepanitiaan acara Kunjungan Industri Prodi D3 Sistem Informasi divisi logistik',
    },
    {
      nama: 'Organisasi',
      kegiatan:
        'Mengikuti kepanitiaan acara Dies Natalies Prodi D3 Sistem Informasi divisi humas',
    },
    {
      nama: 'Organisasi',
      kegiatan:
        'Mengikuti kepanitiaan acara SiGames Prodi D3 Sistem Informasi divisi acara',
    },
    {
      nama: 'Akademik',
      kegiatan:
        'Masuk 20 besar lomba BRI x Google Hackathon 2020 yang dilaksanakan di Bandung',
    },
    {
      nama: 'Akademik',
      kegiatan:
        'Aktif sebagai anggota Research Team di StartUpHub.id Telkom univeristy',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="leftcolumn">
          <h2>Pengalaman Berorganisasi</h2>
          <ul>
            {experiences
              .filter((organisasi) => {
                return organisasi.nama === 'Organisasi';
              })
              .map((organisasi) => {
                return (
                  <li className="list-portofolio">
                    <p>{organisasi.kegiatan}</p>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="portofolio-rightcolumn">
          <h2>Pengalaman Akademik</h2>
          <ul>
            {experiences
              .filter((akademik) => {
                return akademik.nama === 'Akademik';
              })
              .map((akademik) => {
                return (
                  <li className="list-portofolio">
                    <p>{akademik.kegiatan}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Portofolio;
