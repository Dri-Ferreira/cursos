import adminJS from "adminjs";
import adminJSExpress from "@adminjs/express";
import * as AdminJSPrisma from '@adminjs/prisma'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
adminJS.registerAdapter(AdminJSPrisma);

export const adminjs = new adminJS({
    databases: [prisma],
    rootPath: "/admin",
    branding: {
        companyName: 'OneBitFlix',
        logo: '/onebitflix.svg',
        theme: {
          colors: {
            primary100: '#ff0043',
              primary80: '#ff1a57',
              primary60: '#ff3369',
              primary40: '#ff4d7c',
                primary20: '#ff668f',
              grey100: '#151515',
              grey80: '#333333',
              grey60: '#4d4d4d',
              grey40: '#666666',
              grey20: '#dddddd',
              filterBg: '#333333',
              accent: '#151515',
              hoverBg: '#151515',
          }
        }
    }
})

export const adminJsRouter = adminJSExpress.buildRouter(adminjs)