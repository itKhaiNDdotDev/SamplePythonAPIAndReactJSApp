from pydantic import BaseModel, Field
from bson import ObjectId

class Student(BaseModel):
    id: ObjectId = Field(default_factory=ObjectId, alias='_id')
    name: str
    gender: str
    student_class: str