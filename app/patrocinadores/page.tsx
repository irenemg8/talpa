'use client'

import { useTranslation } from '@/hooks/use-translation'
import Image from 'next/image'

export default function PatrocinadoresPage() {
  const { t } = useTranslation()

  const mainSponsor = {
    name: 'Universidad Politécnica de Valencia',
    logo: '/empresas/UPV.png',
    url: 'https://www.upv.es'
  }

  // Grupo de 4 sponsors que aparecerán en una línea en pantallas grandes
  const fourColumnSponsors = [
    {
      name: 'CHM',
      logo: '/empresas/CHM-Logo.png',
      url: '#'
    },
    {
      name: 'HP',
      logo: '/empresas/hp.png',
      url: '#'
    },
    {
      name: 'Serigrafics',
      logo: '/empresas/Logo_SeriGrafics.svg',
      url: '#'
    },
    {
      name: 'Incibe',
      logo: '/empresas/Incibe.png',
      url: '#'
    },
  ]

  // Resto de sponsors
  const otherSponsors = [
    {
      name: 'General Electric',
      logo: '/empresas/ge.png',
      url: '#'
    },
    {
      name: 'Caminos',
      logo: '/empresas/caminos.png',
      url: '#'
    },
    {
      name: 'Becsa',
      logo: '/empresas/becsa-logo.png',
      url: '#'
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('sponsors.title')}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('sponsors.subtitle')}
          </p>
        </div>

        {/* UPV - Patrocinador Principal (sin etiqueta) */}
        <div className="flex justify-center mb-20">
          <a 
            href={mainSponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src={mainSponsor.logo}
              alt={mainSponsor.name}
              width={400}
              height={200}
              className="w-auto h-32 md:h-40 object-contain"
            />
          </a>
        </div>

        {/* Grupo de 4 sponsors en una línea */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
          {fourColumnSponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center items-center">
              <a 
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="w-auto h-16 md:h-20 object-contain"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Resto de patrocinadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {otherSponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center items-center">
              <a 
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={250}
                  height={120}
                  className="w-auto h-20 md:h-24 object-contain"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Sección CTA simple */}
        <div className="mt-32 text-center">
          <h2 className="font-overpass text-2xl md:text-3xl font-bold mb-4">
            <span className="gradient-text">{t('sponsors.become_sponsor_title')}</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('sponsors.become_sponsor_description')}
          </p>
          <a
            href="/contacto"
            className="inline-block btn-primary"
          >
            {t('sponsors.contact_button')}
          </a>
        </div>
      </div>
    </div>
  )
}