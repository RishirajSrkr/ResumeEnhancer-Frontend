import { setDoc, doc } from "firebase/firestore";
import { db, collection } from "../firebase";

export async function saveResume(userName, resumeData) {
    try {
        const docRef = doc(collection(db, "resumes"), userName);
        await setDoc(docRef, {
            resumeData,
            createdAt: new Date()
        })
        console.log("Resume saved with ID: ", docRef.id);
        return userName;
    } catch (error) {
        console.error("Error saving resume:", error);
        return null;
    }
}
