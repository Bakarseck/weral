import type { Patient, RendezVous, Personnel } from "@/types"

// URL de base de l'API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000/api"

// Fonction générique pour les appels API
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("token")

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`)
  }

  return response.json()
}

// API Patients
export async function fetchPatients(): Promise<Patient[]> {
  // Simulation de données pour le développement
  return [
    {
      id: 1,
      codePatient: "P001",
      nom: "Diop",
      prenom: "Amadou",
      tel: "77 123 45 67",
      numeroAssurance: "ASS123456",
      notesMedicales: "Patient hypertendu sous traitement",
      traitements: "Amlodipine 5mg 1cp/jour",
      hospitalisations: "Aucune hospitalisation récente",
    },
    {
      id: 2,
      codePatient: "P002",
      nom: "Ndiaye",
      prenom: "Fatou",
      tel: "76 987 65 43",
      numeroAssurance: null,
      notesMedicales: "Diabète type 2",
      traitements: "Metformine 500mg 2cp/jour",
      hospitalisations: null,
    },
  ]
  // En production, utilisez:
  // return fetchAPI<Patient[]>("/patients")
}

export async function fetchPatient(id: number): Promise<Patient> {
  // Simulation
  return {
    id,
    codePatient: `P00${id}`,
    nom: id === 1 ? "Diop" : "Ndiaye",
    prenom: id === 1 ? "Amadou" : "Fatou",
    tel: id === 1 ? "77 123 45 67" : "76 987 65 43",
    numeroAssurance: id === 1 ? "ASS123456" : null,
    notesMedicales: id === 1 ? "Patient hypertendu sous traitement" : "Diabète type 2",
    traitements: id === 1 ? "Amlodipine 5mg 1cp/jour" : "Metformine 500mg 2cp/jour",
    hospitalisations: id === 1 ? "Aucune hospitalisation récente" : null,
  }
  // En production:
  // return fetchAPI<Patient>(`/patients/${id}`)
}

export async function createPatient(patient: Partial<Patient>): Promise<Patient> {
  // Simulation
  return {
    id: 3,
    codePatient: patient.codePatient || "",
    nom: patient.nom || "",
    prenom: patient.prenom || "",
    tel: patient.tel || "",
    numeroAssurance: patient.numeroAssurance || null,
    notesMedicales: patient.notesMedicales || null,
    traitements: patient.traitements || null,
    hospitalisations: null,
  }
  // En production:
  // return fetchAPI<Patient>("/patients", {
  //   method: "POST",
  //   body: JSON.stringify(patient),
  // })
}

export async function updatePatient(id: number, patient: Partial<Patient>): Promise<Patient> {
  // Simulation
  return {
    id,
    codePatient: patient.codePatient || "",
    nom: patient.nom || "",
    prenom: patient.prenom || "",
    tel: patient.tel || "",
    numeroAssurance: patient.numeroAssurance || null,
    notesMedicales: patient.notesMedicales || null,
    traitements: patient.traitements || null,
    hospitalisations: patient.hospitalisations || null,
  }
  // En production:
  // return fetchAPI<Patient>(`/patients/${id}`, {
  //   method: "PUT",
  //   body: JSON.stringify(patient),
  // })
}

export async function deletePatient(id: number): Promise<void> {
  // Simulation
  return Promise.resolve()
  // En production:
  // return fetchAPI<void>(`/patients/${id}`, {
  //   method: "DELETE",
  // })
}

export async function searchPatients(params: Record<string, string>): Promise<Patient[]> {
  // Simulation
  return [
    {
      id: 1,
      codePatient: "P001",
      nom: "Diop",
      prenom: "Amadou",
      tel: "77 123 45 67",
      numeroAssurance: "ASS123456",
      notesMedicales: "Patient hypertendu sous traitement",
      traitements: "Amlodipine 5mg 1cp/jour",
      hospitalisations: "Aucune hospitalisation récente",
    },
  ]
  // En production:
  // const queryParams = new URLSearchParams()
  // Object.entries(params).forEach(([key, value]) => {
  //   if (value) queryParams.append(key, value)
  // })
  // return fetchAPI<Patient[]>(`/patients/search?${queryParams.toString()}`)
}

// API Rendez-vous
export async function fetchRendezVous(): Promise<RendezVous[]> {
  // Simulation
  return [
    {
      id: 1,
      patientId: 1,
      personnelId: 1,
      dateHeure: "2023-07-15 09:00",
      motif: "Consultation de routine",
    },
    {
      id: 2,
      patientId: 2,
      personnelId: 2,
      dateHeure: "2023-07-16 10:30",
      motif: "Suivi diabète",
    },
  ]
  // En production:
  // return fetchAPI<RendezVous[]>("/rendezvous")
}

export async function fetchRendezVousByPatient(patientId: number): Promise<RendezVous[]> {
  // Simulation
  return [
    {
      id: 1,
      patientId,
      personnelId: 1,
      dateHeure: "2023-07-15 09:00",
      motif: "Consultation de routine",
    },
  ]
  // En production:
  // return fetchAPI<RendezVous[]>(`/rendezvous/patient/${patientId}`)
}

export async function fetchRendezVousByMedecin(personnelId: number): Promise<RendezVous[]> {
  // Simulation
  return [
    {
      id: 2,
      patientId: 2,
      personnelId,
      dateHeure: "2023-07-16 10:30",
      motif: "Suivi diabète",
    },
  ]
  // En production:
  // return fetchAPI<RendezVous[]>(`/rendezvous/medecin/${personnelId}`)
}

export async function deleteRendezVous(id: number): Promise<void> {
  // Simulation
  return Promise.resolve()
  // En production:
  // return fetchAPI<void>(`/rendezvous/${id}`, {
  //   method: "DELETE",
  // })
}

// API Personnel
export async function fetchPersonnels(): Promise<Personnel[]> {
  // Simulation
  return [
    {
      id: 1,
      nom: "Mbaye",
      prenom: "Abdoulaye",
      role: "medecin",
      specialite: "Cardiologie",
      telephone: "77 111 22 33",
    },
    {
      id: 2,
      nom: "Diallo",
      prenom: "Mariama",
      role: "infirmier",
      specialite: null,
      telephone: "76 444 55 66",
    },
  ]
  // En production:
  // return fetchAPI<Personnel[]>("/personnel")
}

export async function fetchPersonnel(id: number): Promise<Personnel> {
  // Simulation
  return {
    id,
    nom: id === 1 ? "Mbaye" : "Diallo",
    prenom: id === 1 ? "Abdoulaye" : "Mariama",
    role: id === 1 ? "medecin" : "infirmier",
    specialite: id === 1 ? "Cardiologie" : null,
    telephone: id === 1 ? "77 111 22 33" : "76 444 55 66",
  }
  // En production:
  // return fetchAPI<Personnel>(`/personnel/${id}`)
}

export async function fetchPersonnelsByRole(role: string): Promise<Personnel[]> {
  // Simulation
  if (role === "medecin") {
    return [
      {
        id: 1,
        nom: "Mbaye",
        prenom: "Abdoulaye",
        role: "medecin",
        specialite: "Cardiologie",
        telephone: "77 111 22 33",
      },
    ]
  } else {
    return [
      {
        id: 2,
        nom: "Diallo",
        prenom: "Mariama",
        role: "infirmier",
        specialite: null,
        telephone: "76 444 55 66",
      },
    ]
  }
  // En production:
  // return fetchAPI<Personnel[]>(`/personnel/role/${role}`)
}

export async function deletePersonnel(id: number): Promise<void> {
  // Simulation
  return Promise.resolve()
  // En production:
  // return fetchAPI<void>(`/personnel/${id}`, {
  //   method: "DELETE",
  // })
}

// Ajoutez d'autres fonctions API pour les autres modules (chambres, matériels, paiements, etc.)
