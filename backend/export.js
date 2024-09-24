const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-writer');

const exportToCSV = async () => {
    try {
        const formData = await FormData.find(); // Fetch all form data from MongoDB
        
        const csv = csvWriter.createObjectCsvStringifier({
            header: [
                { id: 'name', title: 'Name' },
                { id: 'contact', title: 'Contact' },
                { id: 'email', title: 'Email' },
                { id: 'dob', title: 'DOB' },
                { id: 'education', title: 'Education' },
                { id: 'address', title: 'Address' },
                { id: 'permanentAddress', title: 'Permanent Address' },
                { id: 'resumeLink', title: 'Resume Link' },
            ]
        });
        
        const records = formData.map(item => ({
            name: item.name,
            contact: item.contact,
            email: item.email,
            dob: item.dob,
            education: item.education,
            address: item.address,
            permanentAddress: item.permanentAddress,
            resumeLink: `${process.env.BASE_URL}/uploads/${path.basename(item.resume)}`, // Generate the resume link
        }));

        const csvContent = csv.getHeaderString() + csv.stringifyRecords(records);

        fs.writeFileSync(path.join(__dirname, 'output', 'formData.csv'), csvContent);

        console.log('CSV file has been written successfully.');
    } catch (error) {
        console.error('Error exporting data to CSV:', error);
    }
};

exportToCSV();
