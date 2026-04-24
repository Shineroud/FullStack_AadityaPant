from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: str

class JobCreate(BaseModel):
    title: str
    description: str
    location: str
    salary: int
    job_type: str

class JobResponse(JobCreate):
    id: int
    employer_id: Optional[int] = None

    class Config:
        from_attributes = True