import * as React from 'react';

const App: React.FC = () => {
  const navLinks = ['Cómo funciona', 'Bodega', 'Noticias', 'Winepaper', 'About'];

  const handleLoginWithGoogle = () => {
    const clientId = 'YOUR_CLIENT_ID'; // Replace with your Google OAuth client ID
    const redirectUri = 'YOUR_REDIRECT_URI'; // Replace with your redirect URI
    const scope = 'email profile openid'; // Specify the scopes your application requires

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

    window.location.href = authUrl;
  };

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask');
        console.log('Accounts:', accounts);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask to use this feature');
    }
  };

  return (
    <>
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f166cc8c2964ed7a3bbc1b91eaee5969d85bd5451c9bce02256e46a0754ad65a?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&"
            alt="Vint primary logo"
            className="w-16"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/53c5af48ecc62135316093c076a0f5c3f7c16531710e8b4bd9881b0ab7d42d4e?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&"
            alt="Vint secondary logo"
            className="w-32"
          />
        </div>
        <nav className="flex gap-4">
          {navLinks.map((link, index) => (
            <a href="#" key={index} className="text-lg">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded">
            Vint!
          </button>
          <button className="bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded">
            Conectar
          </button>
        </div>
      </header>
      <section className="relative w-full h-screen">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e3aa5412d43c102ac2d24db2ba7c0587238dad7cb9bb882a1fa0df16fa926c?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&"
          alt="Descriptive text for image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8 rounded-xl shadow-lg">
          <h1 className="text-5xl font-bold text-white">Vintvenidos</h1>
          <p className="text-xl text-white mt-4">
            Una nueva forma de consumir vinos de colección. Aplicando tecnología blockchain para reducir intermediarios entre las bodegas de la región y sus clientes.
          </p>
          <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded">
            Conectá tu billetera
          </button>
        </section>
      </section>
    </>
  );
};

export default App;
