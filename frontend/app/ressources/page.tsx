import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PlusCircle, Search } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function RessourcesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Gestion des ressources" description="Consultez et gérez les ressources de l'hôpital">
        <Link href="/ressources/nouveau">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nouvelle ressource
          </Button>
        </Link>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chambres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span>Taux d'occupation: 78%</span>
                <span>35/45</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span>Taux d'occupation: 82%</span>
                <span>98/120</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Équipements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85</div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span>En service: 92%</span>
                <span>78/85</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="chambres" className="mt-6">
        <TabsList>
          <TabsTrigger value="chambres">Chambres</TabsTrigger>
          <TabsTrigger value="lits">Lits</TabsTrigger>
          <TabsTrigger value="equipements">Équipements</TabsTrigger>
        </TabsList>
        <TabsContent value="chambres" className="mt-4">
          <div className="flex items-center py-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher une chambre..." className="w-full pl-8" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>N° Chambre</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Étage</TableHead>
                  <TableHead>Capacité</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">C-101</TableCell>
                  <TableCell>Standard</TableCell>
                  <TableCell>1er</TableCell>
                  <TableCell>2 lits</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Occupée
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/chambres/C-101">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">C-102</TableCell>
                  <TableCell>VIP</TableCell>
                  <TableCell>1er</TableCell>
                  <TableCell>1 lit</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Occupée
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/chambres/C-102">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">C-103</TableCell>
                  <TableCell>Standard</TableCell>
                  <TableCell>1er</TableCell>
                  <TableCell>2 lits</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-slate-500 mr-2"></div>
                      Libre
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/chambres/C-103">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="lits" className="mt-4">
          <div className="flex items-center py-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher un lit..." className="w-full pl-8" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Lit</TableHead>
                  <TableHead>Chambre</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">L-1001</TableCell>
                  <TableCell>C-101</TableCell>
                  <TableCell>Standard</TableCell>
                  <TableCell>Amadou Diop</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Occupé
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/lits/L-1001">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">L-1002</TableCell>
                  <TableCell>C-101</TableCell>
                  <TableCell>Standard</TableCell>
                  <TableCell>Fatou Ndiaye</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Occupé
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/lits/L-1002">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">L-1003</TableCell>
                  <TableCell>C-102</TableCell>
                  <TableCell>VIP</TableCell>
                  <TableCell>Ousmane Sow</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Occupé
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/lits/L-1003">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="equipements" className="mt-4">
          <div className="flex items-center py-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher un équipement..." className="w-full pl-8" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Équipement</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Localisation</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">E-1001</TableCell>
                  <TableCell>Moniteur cardiaque</TableCell>
                  <TableCell>Diagnostic</TableCell>
                  <TableCell>Service Cardiologie</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      En service
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/equipements/E-1001">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">E-1002</TableCell>
                  <TableCell>Respirateur</TableCell>
                  <TableCell>Soins intensifs</TableCell>
                  <TableCell>Réanimation</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      En service
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/equipements/E-1002">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">E-1003</TableCell>
                  <TableCell>Échographe</TableCell>
                  <TableCell>Imagerie</TableCell>
                  <TableCell>Service Radiologie</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                      En maintenance
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/ressources/equipements/E-1003">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
