import { Button } from '@nextui-org/react'
import Link from 'next/link'

const CtaSection = () => {
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
          <div className="absolute right-0 top-0 h-full w-full flex justify-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
          </div>
          <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
          </div>
          <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
            <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-secondary dark:text-white">
              Démarrez rapidement votre projet logistique stratégique
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Chez Medina Transit Services, nous offrons des solutions de
              transport et de logistique adaptées à vos besoins spécifiques.
              Notre équipe dévouée est prête à vous accompagner dans la
              croissance de votre entreprise avec des services fiables et
              efficaces.
            </p>
            <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
              <Button
                variant="flat"
                color="secondary"
                className="h-12 px-5 scroll-smooth"
                as={Link}
                href="#cta-form-section"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
