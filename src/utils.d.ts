declare module "utils" {
    const validate = (data: any) => {
        if (!Array.isArray(data)) return data;

        return data.map((d) => {
            if (d._id && typeof d._id !== 'string') d._id = d._id.toString();
            return d;
        });
    };
}

