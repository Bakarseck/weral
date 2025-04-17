"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NouvelleRessourcePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler un appel API
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Ressource créée avec succès",
        description: "La nouvelle ressource a été ajoutée au système",
      })
      router.push("/ressources")
    }, 1500)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Nouvelle ressource" description="Ajouter une nouvelle ressource au système">
        <Link href="/ressources">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </Link>
      </DashboardHeader>

      <Tabs defaultValue="chambre">
        <TabsList>
          <TabsTrigger value="chambre">Chambre</TabsTrigger>
          <TabsTrigger value="lit">Lit</TabsTrigger>
          <TabsTrigger value="equipement">Équipement</TabsTrigger>
        </TabsList>

        <TabsContent value="chambre" className="mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Nouvelle chambre</CardTitle>
                <CardDescription>Ajouter une nouvelle chambre à l'hôpital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="numero">Numéro de chambre</Label>
                    <Input id="numero" placeholder="Ex: C-105" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type de chambre</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                        <SelectItem value="soins-intensifs">Soins intensifs</SelectItem>
                        <SelectItem value="isolement">Isolement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="etage">Étage</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un étage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rdc">Rez-de-chaussée</SelectItem>
                        <SelectItem value="1">1er étage</SelectItem>
                        <SelectItem value="2">2ème étage</SelectItem>
                        <SelectItem value="3">3ème étage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacite">Capacité (nombre de lits)</Label>
                    <Input id="capacite" type="number" min="1" defaultValue="2" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tarif">Tarif journalier (FCFA)</Label>
                    <Input id="tarif" type="number" min="0" placeholder="Tarif" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="statut">Statut</Label>
                    <Select defaultValue="libre">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="libre">Libre</SelectItem>
                        <SelectItem value="occupee">Occupée</SelectItem>
                        <SelectItem value="maintenance">En maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="equipements">Équipements disponibles</Label>
                  <Textarea id="equipements" placeholder="Liste des équipements disponibles dans la chambre" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes supplémentaires</Label>
                  <Textarea id="notes" placeholder="Notes supplémentaires" rows={3} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t p-6">
                <Button variant="outline" onClick={() => router.push("/ressources")}>
                  Annuler
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Enregistrement..." : "Enregistrer la chambre"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="lit" className="mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Nouveau lit</CardTitle>
                <CardDescription>Ajouter un nouveau lit à l'hôpital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="id_lit">ID du lit</Label>
                    <Input id="id_lit" placeholder="Ex: L-1005" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="chambre">Chambre</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une chambre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="c-101">C-101</SelectItem>
                        <SelectItem value="c-102">C-102</SelectItem>
                        <SelectItem value="c-103">C-103</SelectItem>
                        <SelectItem value="c-104">C-104</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type_lit">Type de lit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="medical">Médical</SelectItem>
                        <SelectItem value="soins-intensifs">Soins intensifs</SelectItem>
                        <SelectItem value="pediatrique">Pédiatrique</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="statut_lit">Statut</Label>
                    <Select defaultValue="libre">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="libre">Libre</SelectItem>
                        <SelectItem value="occupe">Occupé</SelectItem>
                        <SelectItem value="maintenance">En maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes_lit">Notes supplémentaires</Label>
                  <Textarea id="notes_lit" placeholder="Notes supplémentaires" rows={3} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t p-6">
                <Button variant="outline" onClick={() => router.push("/ressources")}>
                  Annuler
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Enregistrement..." : "Enregistrer le lit"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="equipement" className="mt-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Nouvel équipement</CardTitle>
                <CardDescription>Ajouter un nouvel équipement à l'hôpital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="id_equipement">ID de l'équipement</Label>
                    <Input id="id_equipement" placeholder="Ex: E-1005" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom_equipement">Nom de l'équipement</Label>
                    <Input id="nom_equipement" placeholder="Nom de l'équipement" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="categorie">Catégorie</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diagnostic">Diagnostic</SelectItem>
                        <SelectItem value="soins">Soins</SelectItem>
                        <SelectItem value="imagerie">Imagerie</SelectItem>
                        <SelectItem value="laboratoire">Laboratoire</SelectItem>
                        <SelectItem value="chirurgie">Chirurgie</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="localisation">Localisation</Label>
                    <Input id="localisation" placeholder="Service ou emplacement" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date_acquisition">Date d'acquisition</Label>
                    <Input id="date_acquisition" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="statut_equipement">Statut</Label>
                    <Select defaultValue="en_service">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en_service">En service</SelectItem>
                        <SelectItem value="maintenance">En maintenance</SelectItem>
                        <SelectItem value="hors_service">Hors service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valeur">Valeur (FCFA)</Label>
                    <Input id="valeur" type="number" min="0" placeholder="Valeur" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fournisseur">Fournisseur</Label>
                    <Input id="fournisseur" placeholder="Nom du fournisseur" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Description de l'équipement" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes_equipement">Notes supplémentaires</Label>
                  <Textarea id="notes_equipement" placeholder="Notes supplémentaires" rows={3} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t p-6">
                <Button variant="outline" onClick={() => router.push("/ressources")}>
                  Annuler
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Enregistrement..." : "Enregistrer l'équipement"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
