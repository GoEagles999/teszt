from typing import Union

from fastapi import FastAPI
import numpy as np

app = FastAPI()


@app.get("/sin")
def getSin():
    x = np.linspace(-np.pi, np.pi, 1000)
    return {"val": list(np.sin(x))}