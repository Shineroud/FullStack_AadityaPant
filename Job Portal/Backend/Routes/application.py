from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def apply(job_id: int):
    return {"msg": "Applied"}

@router.get("/job/{job_id}")
def get_applicants(job_id: int):
    return {"applicants": []}