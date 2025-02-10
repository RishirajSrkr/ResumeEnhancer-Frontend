import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getResume(userName) {
    try {
        const docRef = doc(db, "resumes", userName);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data(); 
        } else {
            console.log("No resume found!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching resume:", error);
        return null;
    }
}
