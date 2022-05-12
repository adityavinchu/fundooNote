import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';
import app from '../../src/index';

let loginToken;

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('POST/registration', () => {
    it('should register new user and return status 201', (done) => {
      const userdetail={
        firstname:"abcd",
        lastname:"efgh",
        email:"nolev77114@abincol.com",
        password:"qwerty123"
      };
      request(app)
        .post('/api/v1/users/registration')
        .send(userdetail)
        .end((err,res)=>{
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });
    });
  });
  // describe('POST/registration', () => {
  //   it('given new user when added should return status 201', (done) => {
  //     const userdetail={
  //       firstname:123,
  //       lastname:"def",
  //       email:"nolev77114@abincol.com",
  //       password:"qwerty123"
  //     };
  //     request(app)
  //       .post('/api/v1/users/registration')
  //       .send(userdetail)
  //       .end((err,res)=>{
  //         expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
  //         done();
  //       });
  //   });
  // });
  describe('POST/login', () => {
    it('given new user when added should return status 200', (done) => {
      const userdetail={
        email:"nolev77114@abincol.com",
        password:"qwerty123"
      };
      request(app)
        .post('/api/v1/users/login')
        .send(userdetail)
        .end((err,res)=>{
          loginToken=res.body.data;
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });
    });
  });
  describe('POST/login', () => {
    it('given user incorrect should return status 500', (done) => {
      const userdetail={
        email:"nolev77114@abincol.com",
        password:"112233"
      };
      request(app)
        .post('/api/v1/users/login')
        .send(userdetail)
        .end((err,res)=>{
          expect(res.statusCode).to.be.equal(HttpStatus.INTERNAL_SERVER_ERROR);
          done();
        });
    });
  });
  describe('POST/notes', () => {
    it('given new user when added note ', (done) => {
      const notedetail={
        title:"new note",
        description:"this is demo note"
      };
      request(app)
        .post('/api/v1/notes')
        .send(notedetail)
        .set('Authorization', `${loginToken}`)
        .end((err,res)=>{
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });
    });
  });
});
