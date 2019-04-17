import { Request, Response } from "express";
import { NextFunction } from "connect";

export class BlockService {
    public async getBlocks(request: Request, response: Response, next: NextFunction){
        throw new Error("getBlocks not implemented!");
        next();
    }
}

// public async getBlockByNumer(request: Request, response: Response, next: NextFunction){

// public async getBlockByHash(request: Request, response: Response, next: NextFunction){

// public async getBlocksByPeriod(request: Request, response: Response, next: NextFunction){

// public async getBlocksByDate(request: Request, response: Response, next: NextFunction){

// public async getBlocksByWallet(request: Request, response: Response, next: NextFunction){

// public async getPreviousBlock(request: Request, response: Response, next: NextFunction){

// public async getNextBlock(request: Request, response: Response, next: NextFunction){

// public async getNextBlocks(request: Request, response: Response, next: NextFunction){
