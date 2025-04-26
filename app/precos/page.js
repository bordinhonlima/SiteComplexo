'use client';

import { useState } from 'react';

const armasGTA = [
  {
    nome: 'Sniperrifle',
    preco: 'R$ 2.000.000',
    precoParceria: 'R$ 1.900.000',
  },
  {
    nome: 'Specialcarbine_mk2 (G36)',
    preco: 'R$ 1.500.000',
    precoParceria: 'R$ 1.400.000',
  },
  {
    nome: 'Militaryrifle (Ram-7)',
    preco: 'R$ 1.450.000',
    precoParceria: 'R$ 1.350.000',
  },
  {
    nome: 'Carbinerifle_mk2 (Mpx)',
    preco: 'R$ 1.350.000',
    precoParceria: 'R$ 1.250.000',
  },
  {
    nome: 'Scarh',
    preco: 'R$ 1.250.000',
    precoParceria: 'R$ 1.150.000',
  },
  {
    nome: 'Assautsmg (Mtar-21)',
    preco: 'R$ 1.100.000',
    precoParceria: 'R$ 1.000.000',
  },
  {
    nome: 'Assaultrifle_mk2 (Ak-47)',
    preco: 'R$ 1.000.000',
    precoParceria: 'R$ 900.000',
  },
  {
    nome: 'Mp9',
    preco: 'R$ 900.000',
    precoParceria: 'R$ 800.000',
  },
  {
    nome: 'Machinepistol (Tec-9)',
    preco: 'R$ 700.000',
    precoParceria: 'R$ 600.000',
  },
];

const municoes = [
  {
    nome: 'Mun Sniperrifle (Ak-47)',
    preco: 'R$ 6.800',
    precoParceria: 'R$ 6.600',
  },
  {
    nome: 'Mun Specialcarbine_mk2 (G36)',
    preco: 'R$ 6.500',
    precoParceria: 'R$ 6.200',
  },
  {
    nome: 'Mun Militaryrifle (Ram-7)',
    preco: 'R$ 6.400',
    precoParceria: 'R$ 6.100',
  },
  {
    nome: 'Mun Carbinerifle_mk2 (M4A4) (Mpx)',
    preco: 'R$ 6.200',
    precoParceria: 'R$ 6.000',
  },
  {
    nome: 'Mun Scarh',
    preco: 'R$ 5.400',
    precoParceria: 'R$ 5.100',
  },
  {
    nome: 'Mun Assautsmg (Mtar-21)',
    preco: 'R$ 5.200',
    precoParceria: 'R$ 4.800',
  },
  {
    nome: 'Mun Assaultrifle_mk2 (Navy-Carabine)',
    preco: 'R$ 5.000',
    precoParceria: 'R$ 4.800',
  },
  {
    nome: 'Mun Mp9',
    preco: 'R$ 4.800',
    precoParceria: 'R$ 4.600',
  },
  {
    nome: 'Mun Machinepistol (Tec-9)',
    preco: 'R$ 3.400',
    precoParceria: 'R$ 3.100',
  },
  {
    nome: 'Mun Pistol .50',
    preco: 'R$ 2.100',
    precoParceria: 'R$ 2.000',
  },
  {
    nome: 'Mun Fiven_Seven',
    preco: 'R$ 2.100',
    precoParceria: 'R$ 2.000',
  },
];

const lavagem = [
  {
    nome: 'Lavagem',
    preco: '50%',
    precoParceria: '30%',
  },
  {
    nome: 'Colete',
    preco: 'R$ 200.000',
    precoParceria: 'R$ 180.000',
  },
  {
    nome: 'Adrenalina',
    preco: 'R$ 105.000',
    precoParceria: 'R$ 95.000',
  },
  {
    nome: 'Capuz',
    preco: 'R$ 7.000',
    precoParceria: 'R$ 6.000',
  },
  {
    nome: 'Algema',
    preco: 'R$ 25.000',
    precoParceria: 'R$ 15.000',
  },
  {
    nome: 'Sala personalizada',
    preco: 'R$ 70.000',
    precoParceria: 'R$ 60.000',
  },
  {
    nome: 'Carro de som',
    preco: 'R$ 10.000.000',
    precoParceria: 'R$ 9.000.000',
  },
  {
    nome: 'Blacklist',
    preco: 'R$ 1.500.000',
    precoParceria: 'R$ 700.000',
  },
  {
    nome: 'Colete Premium',
    preco: 'R$ 350.000',
    precoParceria: 'R$ 300.000',
  },
  {
    nome: 'Kit sequestro',
    preco: 'R$ 60.000',
    precoParceria: 'R$ 54.000',
  },
  {
    nome: 'Energético',
    preco: 'R$ 15.000',
    precoParceria: 'R$ 12.000',
  },
];

const desmanche = [
  {
    nome: 'Desmanche',
    preco: '60%',
    precoParceria: '40%',
  },
  {
    nome: 'Lockpick',
    preco: 'R$ 50.000',
    precoParceria: 'R$ 40.000',
  },
  {
    nome: 'Colete Premium',
    preco: 'R$ 350.000',
    precoParceria: 'R$ 300.000',
  },
  {
    nome: 'Placa',
    preco: 'R$ 75.000',
    precoParceria: 'R$ 55.000',
  },
  {
    nome: 'Faca',
    preco: 'R$ 270.000',
    precoParceria: 'R$ 250.000',
  },
  {
    nome: 'Kit reparo2',
    preco: 'R$ 50.000',
    precoParceria: 'R$ 40.000',
  },
  {
    nome: 'Bau 500kg',
    preco: 'R$ 12.500.000',
    precoParceria: 'R$ 10.000.000',
  },
  {
    nome: 'Bau 1000kg',
    preco: 'R$ 23.000.000',
    precoParceria: 'R$ 20.000.000',
  },
  {
    nome: 'Pé de cabra',
    preco: 'R$ 23.000.000',
    precoParceria: 'R$ 20.000.000',
  },
];

const drogas = [
  {
    nome: 'Cocaína',
    preco: 'R$ 12.000',
    precoParceria: 'R$ 11.000',
  },
  {
    nome: 'Maconha',
    preco: 'R$ 12.000',
    precoParceria: 'R$ 11.000',
  },
  {
    nome: 'Heroina',
    preco: 'R$ 12.000',
    precoParceria: 'R$ 11.000',
  },
  {
    nome: 'Cocaina P Venda',
    preco: 'R$ 3.500',
    precoParceria: 'R$ 3.100',
  },
  {
    nome: 'Maconha P Venda',
    preco: 'R$ 3.500',
    precoParceria: 'R$ 3.100',
  },
  {
    nome: 'Taco',
    preco: 'R$ 250.000',
    precoParceria: 'R$ 210.000',
  },
  {
    nome: '.50',
    preco: 'R$ 400.000',
    precoParceria: 'R$ 370.000',
  },
  {
    nome: 'Fiven_Seven',
    preco: 'R$ 400.000',
    precoParceria: 'R$ 370.000',
  },
];

const contrabando = [
  {
    nome: 'Mochila X',
    preco: 'R$ 220.000',
    precoParceria: 'R$ 200.000',
  },
  {
    nome: 'C4',
    preco: 'R$ 82.000',
    precoParceria: 'R$ 76.000',
  },
  {
    nome: 'Masterpick',
    preco: 'R$ 100.000',
    precoParceria: 'R$ 95.000',
  },
  {
    nome: 'Laptop',
    preco: 'R$ 110.000',
    precoParceria: 'R$ 90.000',
  },
  {
    nome: 'CNH roubada',
    preco: 'R$ 150.000',
    precoParceria: 'R$ 120.000',
  },
  {
    nome: 'Carro ilegal',
    preco: 'R$ 10.000.000',
    precoParceria: 'R$ 8.000.000',
  },
  {
    nome: 'Aliança',
    preco: 'R$ 250.000',
    precoParceria: 'R$ 200.000',
  },
  {
    nome: 'Maconha/cocaina p venda',
    preco: 'R$ 3.500',
    precoParceria: 'R$ 3.100',
  },
];

export default function Precos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('armas');
  const [quantidades, setQuantidades] = useState({});
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false);
  const [usarPrecoParceria, setUsarPrecoParceria] = useState(false);

  const servicos = {
    armas: {
      titulo: "Armas",
      items: armasGTA,
    },
    municao: {
      titulo: "Munição",
      items: municoes,
    },
    lavagem: {
      titulo: "Lavagem",
      items: lavagem,
    },
    desmanche: {
      titulo: "Desmanche",
      items: desmanche,
    },
    drogas: {
      titulo: "Drogas",
      items: drogas,
    },
    contrabando: {
      titulo: "Contrabando",
      items: contrabando,
    }
  };

  const categorias = [
    { id: 'armas', nome: 'Armas' },
    { id: 'municao', nome: 'Munição' },
    { id: 'lavagem', nome: 'Lavagem' },
    { id: 'desmanche', nome: 'Desmanche' },
    { id: 'drogas', nome: 'Drogas' },
    { id: 'contrabando', nome: 'Contrabando' }
  ];

  const handleQuantidadeChange = (itemNome, quantidade) => {
    setQuantidades(prev => ({
      ...prev,
      [itemNome]: quantidade
    }));
  };

  const calcularTotal = () => {
    let total = 0;
    let totalParceria = 0;

    Object.entries(quantidades).forEach(([itemNome, quantidade]) => {
      if (quantidade > 0) {
        const item = servicos[categoriaSelecionada].items.find(i => i.nome === itemNome);
        if (item) {
          const preco = parseInt(item.preco.replace(/[^0-9]/g, ''));
          const precoParceria = parseInt(item.precoParceria.replace(/[^0-9]/g, ''));
          total += preco * quantidade;
          totalParceria += precoParceria * quantidade;
        }
      }
    });

    return usarPrecoParceria ? totalParceria : total;
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Tabela de Preços
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Preços atualizados para todos os serviços
          </p>
        </div>

        {/* Navegação entre categorias */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => {
                setCategoriaSelecionada(categoria.id);
                setQuantidades({});
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                categoriaSelecionada === categoria.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Botão para mostrar/esconder calculadora */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setMostrarCalculadora(!mostrarCalculadora)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            {mostrarCalculadora ? 'Esconder Calculadora' : 'Mostrar Calculadora'}
          </button>
        </div>

        {/* Botão para alternar entre preço normal e parceria */}
        {mostrarCalculadora && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setUsarPrecoParceria(!usarPrecoParceria)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                usarPrecoParceria
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              {usarPrecoParceria ? 'Usando Preço Parceria' : 'Usando Preço Normal'}
            </button>
          </div>
        )}

        {/* Conteúdo da categoria selecionada */}
        <div className="mt-12">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-700">
              <h2 className="text-2xl font-bold text-white">{servicos[categoriaSelecionada].titulo}</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {servicos[categoriaSelecionada].items.map((item) => (
                  <div key={item.nome} className="border-b border-gray-700 pb-6 last:border-0">
                    <div className="grid grid-cols-12 gap-4">
                      {/* Coluna da esquerda - Nome e Preços */}
                      <div className={`${item.nome === 'Lavagem' || item.nome === 'Desmanche' ? 'col-span-12' : 'col-span-8'}`}>
                        <h3 className="text-lg font-medium text-white mb-3">{item.nome}</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-700/50 p-3 rounded-lg">
                            <span className="text-red-400 block">{(item.nome === 'Lavagem' || item.nome === 'Desmanche') ? 'Taxa Normal:' : 'Preço Normal:'}</span>
                            <span className="text-red-400 text-xl font-semibold">{item.preco}</span>
                          </div>
                          <div className="bg-gray-700/50 p-3 rounded-lg">
                            <span className="text-green-400 block">{(item.nome === 'Lavagem' || item.nome === 'Desmanche') ? 'Taxa Parceria:' : 'Preço Parceria:'}</span>
                            <span className="text-green-400 text-xl font-semibold">{item.precoParceria}</span>
                          </div>
                        </div>
                        {(item.nome === 'Lavagem' || item.nome === 'Desmanche') && (
                          <p className="text-gray-400 mt-3 text-sm">* Porcentagem cobrada sobre o valor {item.nome === 'Lavagem' ? 'a ser lavado' : 'do veículo'}</p>
                        )}
                      </div>

                      {/* Coluna da direita - Calculadora */}
                      {mostrarCalculadora && item.nome !== 'Lavagem' && item.nome !== 'Desmanche' && (
                        <div className="col-span-4 bg-gray-700/30 p-4 rounded-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <input
                              type="number"
                              min="0"
                              value={quantidades[item.nome] || 0}
                              onChange={(e) => handleQuantidadeChange(item.nome, parseInt(e.target.value) || 0)}
                              className="w-24 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-indigo-500 text-center"
                            />
                            <span className="text-gray-400 font-medium">Quantidade</span>
                          </div>
                          {quantidades[item.nome] > 0 && (
                            <div className="space-y-2 border-t border-gray-600 pt-3 mt-3">
                              <div className="flex justify-between items-center">
                                <span className="text-red-400">Total Normal:</span>
                                <span className="text-red-400 font-semibold">
                                  R$ {(parseInt(item.preco.replace(/[^0-9]/g, '')) * quantidades[item.nome]).toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-green-400">Total Parceria:</span>
                                <span className="text-green-400 font-semibold">
                                  R$ {(parseInt(item.precoParceria.replace(/[^0-9]/g, '')) * quantidades[item.nome]).toLocaleString()}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resumo do pedido */}
        {mostrarCalculadora && calcularTotal() > 0 && (
          <div className="mt-8 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-700">
              <h2 className="text-2xl font-bold text-white">Resumo do Pedido</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {Object.entries(quantidades).map(([itemNome, quantidade]) => {
                  if (quantidade > 0) {
                    const item = servicos[categoriaSelecionada].items.find(i => i.nome === itemNome);
                    const precoItem = usarPrecoParceria ? item.precoParceria : item.preco;
                    const valorTotal = usarPrecoParceria 
                      ? parseInt(item.precoParceria.replace(/[^0-9]/g, '')) * quantidade
                      : parseInt(item.preco.replace(/[^0-9]/g, '')) * quantidade;
                    return (
                      <div key={itemNome} className="flex justify-between items-center text-white">
                        <span>{itemNome} x {quantidade}</span>
                        <span>R$ {valorTotal.toLocaleString()}</span>
                      </div>
                    );
                  }
                  return null;
                })}
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className={usarPrecoParceria ? 'text-green-400' : 'text-red-400'}>
                      Total {usarPrecoParceria ? 'com Parceria' : 'Normal'}:
                    </span>
                    <span className={usarPrecoParceria ? 'text-green-400' : 'text-red-400'}>
                      R$ {calcularTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            * Preços sujeitos a alteração sem aviso prévio
          </p>
          <p className="mt-2 text-gray-400">
            ** Parcerias disponíveis para clientes frequentes
          </p>
        </div>
      </div>
    </div>
  );
} 