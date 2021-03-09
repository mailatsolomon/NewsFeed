import { Router }  from 'express'
import { getTechPinasFeed, getLifeHack, getUpdatedNews, getUnboxingTech, getTheCity, getPinoyTaste, getMoneyTalk, getTravelBook, getTechBeat, getPinoyFitness, getWhatPinoys2Know, getIntellAsia, getGMANews } from '../../../controllers/rssfeedController'

const router = Router()

router.get('/getTechPinasFeed',(req, res) => (getTechPinasFeed(req,res)))
router.get('/getLifeHack',(req, res) => (getLifeHack(req,res)))
router.get('/getUpdatedNews',(req, res) => (getUpdatedNews(req,res)))
router.get('/getUnboxingTech',(req, res) => (getUnboxingTech(req,res)))
router.get('/getTheCity',(req, res) => (getTheCity(req,res)))
router.get('/getPinoyTaste',(req, res) => (getPinoyTaste(req,res)))
router.get('/getMoneyTalk',(req, res) => (getMoneyTalk(req,res)))
router.get('/getTravelBook',(req, res) => (getTravelBook(req,res)))
router.get('/getPinoyFitness',(req, res) => (getPinoyFitness(req,res)))
router.get('/getWhatPinoys2Know',(req, res) => (getWhatPinoys2Know(req,res)))
router.get('/getIntellAsia',(req, res) => (getIntellAsia(req,res))) 
router.get('/getGMANews',(req, res) => (getGMANews(req,res))) 
router.get('/getTechBeat',(req, res) => (getTechBeat(req,res))) 

export default router;