"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, CheckCircle, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface JobPosition {
  id: string
  title: string
  location: string
  isExpanded: boolean
  content: React.ReactNode
  applyLink?: string
}

export default function JobListingsPage() {
  // State to control whether there are jobs available
  const [hasJobs, setHasJobs] = useState(true)

  const [jobPositions, setJobPositions] = useState<JobPosition[]>([
    {
      id: "job1",
      title: "Ingénieur de structure spécialisé en énergie solaire H/F",
      location: "Montpellier",
      isExpanded: false,
      content: (
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-bold">Poste & Missions :</p>
            <p>
              Sous la direction du Responsable Pôle BtoB, vous êtes chargés d'évaluer la faisabilité technique pour
              l'installation de systèmes solaires photovoltaïques afin d'assurer la sécurité des structures des
              bâtiments.
            </p>
            <p>Pour cela, vous aurez à mener les missions suivantes :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Évaluation à distance ou sur sites des structures de toiture pour les installations solaires
                photovoltaïques.
              </li>
              <li>
                Conduire des évaluations techniques détaillées pour déterminer la capacité des toits à supporter le
                poids et la charge des systèmes solaires photovoltaïques.
              </li>
              <li>
                Collaborer avec l'équipe de conception pour s'assurer que les systèmes solaires sont conçus pour être en
                accord avec les contraintes structurelles de chaque bâtiment.
              </li>
              <li>
                Mise en place des méthodes de diagnostic permettant aux commerciaux de trier rapidement les projets
                (GO/No-Go)
              </li>
              <li>Modéliser les étapes d'analyse et de dimensionnement d'un projet</li>
              <li>
                Spécifier les besoins fonctionnels pour développer la plateforme technologique qui automatise les tâches
                répétitives de l'ingénieur structure
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold">Profil :</p>
            <p>
              De formation ingénieur type Bac+5 sur une spécialité Photovoltaïques ou Génie Électrique, vous avez 2 à 5
              ans d'expérience dans l'évaluation des structures de bâtiments de préférence dans le secteur de l'énergie
              solaire.
            </p>
            <p>
              Vous possédez des connaissance approfondie des codes du bâtiment et des réglementations en matière de
              sécurité.
            </p>
          </div>

          <div>
            <p className="font-bold">Rémunération et avantages:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Poste en CDI, statut cadre</li>
              <li>Rémunération : 40 k€ à 60k€ selon expérience</li>
              <li>Horaires : 37h/semaine du lundi au vendredi</li>
              <li>Une journée de RTT par mois</li>
              <li>Télétravail possible dans la limite de 2 jours par semaine</li>
              <li>Tickets restaurant</li>
              <li>Mutuelle (50% payé par l'entreprise)</li>
              <li>Parking payé par l'entreprise</li>
              <li>Environnement de travail agréable à proximité d'Odysseum</li>
            </ul>
          </div>
        </div>
      ),
      applyLink: "https://example.com/apply/job1",
    },
    {
      id: "job2",
      title: "Conseiller clientèle SAV H/F",
      location: "Montpellier",
      isExpanded: false,
      content: (
        <div className="space-y-4 text-sm">
          <p>Vous intégrez l'équipe SUPPORT composé d'un responsable et de 3 conseillers clientèles:</p>

          <div>
            <p className="font-bold">Quelles sont les missions ?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestion des appels entrants et création de tickets d'incidents;</li>
              <li>
                Accompagnement des clients au téléphone pour résoudre, répondre à leur questions sur l'avancement de
                leur projet solaire photovoltaïques
              </li>
              <li>Trouver des solutions à leurs problèmes</li>
              <li>Transmettre les informations ou l'appel aux chefs de projets en charge de leur dossier.</li>
              <li>Appel sortant pour prévenir de l'avancé, ou de l'infaisabilité technique du projet</li>
            </ul>
          </div>

          <div>
            <p className="font-bold">Ce que nous attendons de vous :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vous aimez la relation client, vous savez faire preuve de calme et êtes rassurant.</li>
              <li>Vous aimez travailler en équipe ;</li>
              <li>Vous êtes à l'aise à l'oral et que vous êtes soucieux de la satisfaction de votre interlocuteur</li>
              <li>Les outils informatiques ne vous font pas peur et que vous faites preuve de curiosité.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold">Type d'emploi / Rémunération :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Type de contrat : CDI</li>
              <li>35h du lundi au vendredi (horaire variable entre 9h et 18h)</li>
              <li>Carte restaurant</li>
              <li>Prime d'été</li>
              <li>Prime sur objectif jusqu'à 600€ annuel</li>
              <li>Salaire : 1 950,00€ à 2 000,00€ par mois</li>
            </ul>
          </div>
        </div>
      ),
      applyLink: "https://example.com/apply/job2",
    },
  ])

  const toggleJobExpansion = (id: string) => {
    setJobPositions(jobPositions.map((job) => (job.id === id ? { ...job, isExpanded: !job.isExpanded } : job)))
  }

  // Toggle between having jobs and no jobs (for demonstration)
  const toggleJobsAvailability = () => {
    setHasJobs(!hasJobs)
  }

  return (
    <div className=" bg-white">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Left column with image */}
          <div className="md:col-span-3">
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/pages/qui-sommes-nous/offres-emploi/Office.png"
                alt="Business professionals reviewing information"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column with job listings */}
          <div className="md:col-span-9">
            <Card className="p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Offres d'emploi</h1>

                {/* Demo toggle button - would be removed in production */}
                <Button  size="sm" onClick={toggleJobsAvailability} className="text-xs">
                  {hasJobs ? "Simuler aucune offre" : "Simuler des offres"}
                </Button>
              </div>

              {hasJobs ? (
                <div className="space-y-4">
                  {jobPositions.map((job) => (
                    <div key={job.id} className="bg-white rounded-md shadow">
                      <button
                        onClick={() => toggleJobExpansion(job.id)}
                        className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-left">
                          <h3 className="font-semibold">{job.title}</h3>
                          <p className="text-sm text-gray-500">{job.location}</p>
                        </div>
                        {job.isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      {job.isExpanded && (
                        <div className="px-4 py-4 border-t">
                          {job.content}

                          {job.applyLink && (
                            <div className="mt-4">
                              <Button variant="default" size="sm" className="flex items-center" asChild>
                                <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                                  Postulez-ici <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // No jobs available state
                <div className="relative bg-green-50 border border-green-200 text-green-800 rounded-md p-6 mb-4 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <span className="text-center">Aucune offre pour le moment</span>
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-green-800 hover:text-green-600"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              <Separator className="my-6" />

              <Alert className="bg-green-50 border-green-200 text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                <AlertDescription>
                  Consultez régulièrement cette page pour découvrir nos nouvelles opportunités.
                </AlertDescription>
              </Alert>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

