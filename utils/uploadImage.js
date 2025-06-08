document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('paymentProofImage');
    const preview = document.getElementById('previewImage');
    if (input && preview) {
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    
    // Modal popup logic
    const submitBtn = document.getElementById('submitProofBtn');
    const thankYouModal = document.getElementById('thankYouModal');
    if (submitBtn && thankYouModal) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(thankYouModal);
            modal.show();
        });
    }
});