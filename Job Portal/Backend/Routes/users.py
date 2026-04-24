from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import User
from auth import create_token
from passlib.context import CryptContext
from schemas import UserCreate

router = APIRouter()
pwd_context = CryptContext(schemes=["pbkdf2_sha256", "bcrypt_sha256"], deprecated="auto")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    try:
        print("Received:", user)

        hashed = pwd_context.hash(user.password)   

        new_user = User(
            name=user.name,
            email=user.email,
            password_hash=hashed,
            role=user.role
        )

        db.add(new_user)
        db.commit()

        return {"msg": "User created"}

    except Exception as e:
        print("ERROR:", e)
        return {"error": str(e)}

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not pwd_context.verify(password, user.password_hash):
        return {"error": "Invalid credentials"}

    token = create_token({"sub": user.email, "role": user.role})
    return {"access_token": token}