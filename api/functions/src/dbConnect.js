import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore"
import { service_account} from "../service_account.js"

export default function dbConnect () {
    // if not connect...
    if(!getApps().length) {
        initializeApp({
            credential: cert(service_account)
        })
    }

    return getFirestore();
}