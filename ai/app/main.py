"""T-rex-Star AI Risk Service entrypoint (FastAPI).

ADVISORY ONLY: this service cannot release, refund, issue, or transfer anything,
and never writes to the ledger. All money decisions above threshold are gated by
a human in the backend (Rules.md §3, §6).
"""

from __future__ import annotations

from datetime import datetime, timezone

from fastapi import FastAPI

from app import __version__
from app.routers import risk

app = FastAPI(
    title="T-rex-Star AI Risk Service",
    version=__version__,
    description="Advisory KYC risk aggregation and dispute recommendations.",
)

app.include_router(risk.router)


@app.get("/health")
def health() -> dict[str, str]:
    return {
        "status": "ok",
        "service": "t-rex-star-ai",
        "version": __version__,
        "time": datetime.now(timezone.utc).isoformat(),
    }
