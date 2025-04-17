// Types pour les modèles de données

export interface Patient {
  id?: number
  codePatient: string
  nom: string
  prenom: string
  tel: string
  numeroAssurance: string | null
  notesMedicales: string | null
  traitements: string | null
  hospitalisations: string | null
}

export interface RendezVous {
  id?: number
  patientId: number
  personnelId: number
  dateHeure: string
  motif: string | null
}

export interface Personnel {
  id?: number
  nom: string
  prenom: string
  role: string
  specialite: string | null
  telephone: string
}

export interface Chambre {
  id?: number
  numero: string
  capacite: number
  litsOccupes: number
}

export interface Materiel {
  id?: number
  nom: string
  quantite: number
  fournisseur: string
  dateEntree: string
  dateSortie: string | null
}

export interface Paiement {
  id?: number
  patientId: number
  chambreId: number
  montant: number
  datePaiement: string
  statut: string
}

export interface Assurance {
  id?: number
  nom: string
  typeAssurance: string
  couverture: string
}

export interface Hospitalisation {
  id?: number
  patientId: number
  chambreId: number
  motif: string | null
  dateEntree: string
  dateSortie: string | null
}
