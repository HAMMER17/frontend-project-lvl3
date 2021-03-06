import * as yup from 'yup';

const validator = (data, text) => {
    yup.setLocale({
        string: {
            url: () => text.t('valid.validError'),
        },
    });

    const schema = yup.object().shape({
        url: yup.string().url(),
    });
    return schema.validate({ url: data });
};

export default validator;