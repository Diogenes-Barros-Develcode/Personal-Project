import express from 'express'
import { PrismaClient } from '@prisma/client'


const app = express()
app.use(express.json())
const prisma = new PrismaClient()

app.get('/users/:id', async (request, response) => {
    const userId: string = request.params.id

    const users = await prisma.user.findUnique({
        select: {
            id: true,
            userName: true,
            userPhotoUrl:true,
            _count: {
                select: {
                    themes: true
                }
            }
        },
        where: {
            id: userId
        }
    })

    return response.json(users)
})

app.get('/users/:id/favoritethemes', async (request, response) => {
    const userId = request.params.id

    const favoritethemes = await prisma.favoriteTheme.findMany({
        select: {
            id: true,
            name: true,
            themeImage:true
        },
        where: {
            userId
        }
    })

    return response.json(favoritethemes)
})

app.get('/users/:id/themeEspecification', async (request, response) => {
    const favoriteThemeId = request.params.id

    const themeEspecification = await prisma.themeEspecification.findMany({
        where: {
            favoriteThemeId
        }
    })

    return response.json(themeEspecification)
})

app.listen(3333)