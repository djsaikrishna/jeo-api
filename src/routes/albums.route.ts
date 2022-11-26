import { Router } from 'express'
import { AlbumsController } from '../controllers/albums.controller'
import { albumsSchema } from '../helpers/validator.helper'
import type { Routes } from '../interfaces/routes.interface'

export class AlbumsRoute implements Routes {
  public path = '/albums'
  public router = Router()
  public albumsController = new AlbumsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, albumsSchema, this.albumsController.albumDetails)
  }
}
