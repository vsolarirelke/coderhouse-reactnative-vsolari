import * as SQLite from 'expo-sqlite'

//Inicializa BD local en Celular
export const init = async () => {
    try {
        const db = await SQLite.openDatabaseAsync('session5.db')
        const connected = await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL,email TEXT NOT NULL,idToken TEXT NOT NULL);
        `)
        return connected
    } catch (error) {
        return error
    }
}

//Inserta session
export const insertSession = async ( {localId,email,idToken}) => {
    const db = await SQLite.openDatabaseAsync('session5.db')
    const newSession = await db.runAsync(
        'INSERT INTO sessionUser (localId,email,idToken) VALUES (?,?,?)',
        [localId,email,idToken]
    )
    return newSession
}

//Busca session
export const fetchSession = async () => {
    const db = await SQLite.openDatabaseAsync('session5.db')
    const sessionUser = await db.getFirstAsync('SELECT * FROM sessionUser')
    return sessionUser
}

//Borra session
export const deleteSession = async () => {
    const db = await SQLite.openDatabaseAsync('session5.db')
    const sessionDeleted = await db.runAsync('DELETE FROM sessionUser')
    return sessionDeleted
}