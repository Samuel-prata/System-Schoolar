export function getUserFromTokenPayload(payload: any) {
    // Aqui você pode buscar/criar usuário no banco, se quiser
    // Por enquanto, só retorna o payload
    return {
        sub: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        // Adicione outros campos conforme necessário
    };
}
