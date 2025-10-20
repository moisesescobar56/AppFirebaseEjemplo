import { db } from "../api/firebase";
import { collection, getDocs, getDoc, doc, query,orderBy, where } from "firebase/firestore";

const noticias = collection(db, "noticias");

export async function obtenerNoticias(texto) {
  try {
    let q = query(noticias, orderBy("fechaHora", "desc"));

    if (texto) {
      const startAt = texto;
      const endAt = texto + '\uf8ff';
      q = query(
        noticias,
        where("titulo", ">=", startAt),
        where("titulo", "<=", endAt),
        orderBy("titulo", "asc"),
      );
    }

    const snap = await getDocs(q);
    const array = snap.docs.map(d => ({  id: d.id, ...d.data() }));
    return array;
  } catch (err) {
    console.error("Error obtenerNoticias:", err);
  }
}

export async function obtenerNoticiaPorId(id) {
  try {
    const d = await getDoc(doc(db, "noticias", id));
    if (!d.exists()) return null;
    return {  id: d.id, ...d.data() };
  } catch (err) {
    console.error("Error obtenerNoticiaPorId:", err);
  }
}

export function formatDate(d) {
    // formatear fecha
    const date = new Date(d.seconds * 1000);
    return date.toLocaleDateString("es-SV", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }