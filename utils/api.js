export function statusRoute404(res) {
  res.status(404).json({
    status: 404,
    message: "API Route is not found",
    data: null,
  });
}

export function status200(res, label, data) {
  res.status(200).json({
    status: 200,
    message: `Get ${label ?? "data"} successfuly`,
    data: data,
  });
}

export function status404(res, label) {
  res.status(404).json({
    status: 404,
    message: `${label ?? "Data"} is not found`,
    data: null,
  });
}

export function status500(res, label, error) {
  res.status(500).json({
    status: 500,
    message: `Get ${label ?? "data"} is failed`,
    data: error,
  });
}
