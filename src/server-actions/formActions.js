'use server'
import prisma from "../../lib/prisma"
import { revalidatePath } from "next/cache"

export async function addRequestToDb(formData) {
	const userClientData = {
		firstName: formData.get('firstName'),
		lastName: formData.get('lastName'),
		email: formData.get('email'),
		phone: formData.get('phone'),
		subscriptionType: formData.get('subscriptionType'),
		subscriptionTerm: parseInt(formData.get('subscriptionTerm')),
	}

	revalidatePath('/plans');

	try {
		const createdRow = await prisma.users.create({
			data: {
				firstName: userClientData.firstName,
				lastName: userClientData.lastName,
				email: userClientData.email,
				tel: userClientData.phone,
				subscriptionType: userClientData.subscriptionType,
				subscriptionTerm: userClientData.subscriptionTerm,
			}
		});
		return { success: true };

	} catch (e) {
		return { success: false, error: e }
	}
}