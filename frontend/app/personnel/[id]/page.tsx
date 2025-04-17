import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Edit, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Personnel {
  id: number
  nom: string
  prenom: string
  role: string
  specialite: string
  telephone: string
}

interface PersonnelPageProps {
  params: {
    id: string
  }
}

export default async function PersonnelPage({ params }: PersonnelPageProps) {
  const res = await fetch(`http://localhost:9000/personnel/${params.id}`, {
    next: { revalidate: 0 },
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("Impossible de charger les données du personnel.")
  }

  const personnel: Personnel = await res.json()

  return (
    <DashboardShell>
      <DashboardHeader heading={`${personnel.prenom} ${personnel.nom}`} description={`${personnel.role} - ${personnel.specialite}`}>
        <div className="flex space-x-2">
          <Link href="/personnel">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
          <Link href={`/personnel/${personnel.id}/modifier`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Modifier
            </Button>
          </Link>
        </div>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
            <CardDescription>Détails du membre du personnel</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Prénom</p>
                <p>{personnel.prenom}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Nom</p>
                <p>{personnel.nom}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Spécialité</p>
                <p>{personnel.specialite}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Rôle</p>
                <p>{personnel.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                <p>{personnel.telephone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
