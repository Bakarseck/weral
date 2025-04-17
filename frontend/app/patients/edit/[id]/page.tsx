"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ArrowLeft } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import type { Patient } from "@/types"
import { fetchPatient, updatePatient } from "@/lib/api"

interface EditPatientPageProps {
  params: {
    id: string
  }
}

export default function EditPatientPage({ params }: EditPatientPageProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<Patient | null>(null)

  useEffect(() => {
    const getPatient = async () => {
      try {
        const data = await fetchPatient(Number.parseInt(params.id))
        setFormData(data)
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Impossible de charger les détails du patient",
          variant: "destructive",
        })
      }
    }

    getPatient()
  }, [params.id, toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    setIsLoading(true)

    try {
      await updatePatient(Number.parseInt(params.id), formData)
      toast({
        title: "Succès",
        description: "Patient mis à jour avec succès",
      })
      router.push(`/patients/${params.id}`)
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le patient",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!formData) {
    return (
      <DashboardShell>
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Modifier le patient" description={`Édition de ${formData.prenom} ${formData.nom}`}>
        <Link href={`/patients/${params.id}`}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
        </Link>
      </DashboardHeader>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
            <CardDescription>Modifiez les informations de base du patient</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="codePatient">Code patient</Label>
                <Input
                  id="codePatient"
                  name="codePatient"
                  placeholder="Code unique du patient"
                  value={formData.codePatient}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  name="nom"
                  placeholder="Nom de famille"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  name="prenom"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tel">Téléphone</Label>
                <Input
                  id="tel"
                  name="tel"
                  placeholder="Numéro de téléphone"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numeroAssurance">Numéro d'assurance</Label>
                <Input
                  id="numeroAssurance"
                  name="numeroAssurance"
                  placeholder="Numéro d'assurance (optionnel)"
                  value={formData.numeroAssurance || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Informations médicales</CardTitle>
            <CardDescription>Modifiez les informations médicales du patient</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notesMedicales">Notes médicales</Label>
              <Textarea
                id="notesMedicales"
                name="notesMedicales"
                placeholder="Notes médicales (optionnel)"
                value={formData.notesMedicales || ""}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="traitements">Traitements</Label>
              <Textarea
                id="traitements"
                name="traitements"
                placeholder="Traitements en cours (optionnel)"
                value={formData.traitements || ""}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2 border-t p-6">
            <Button variant="outline" onClick={() => router.push(`/patients/${params.id}`)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Enregistrement..." : "Enregistrer les modifications"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </DashboardShell>
  )
}
